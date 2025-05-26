class HashMap{
  constructor(loadFactor =0.75, capacity = 12) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = new Array(this.capacity)
        .fill(null)
        .map(() => []);
  }

  resize(){
    const oldBuckets = this.buckets;
    this.capacity = this.capacity * 2;

    this.buckets = new Array(this.capacity)
        .fill(null)
        .map(()=>[]);

    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }

  }

  hash(key){
    const primeNumber =31;
    let hashCode = 0;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.capacity; //deals with integer overflow
    }
    return hashCode;
  }

  set(key, value){
    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode >= this.capacity){
      return ("Index out of bounds. Please try again.")
    }
    const bucket = this.buckets[hashCode];

    for (let i = 0; i < bucket.length; i++) {
      const kvPair = bucket[i];
      if (kvPair[0] === key){
        kvPair[1] = value;
        return "Key value has been updated.";
      }
    }

    bucket.push([key, value]);
    if (this.length() > this.capacity * this.loadFactor){
      this.resize();
    }

  }

  get(key){
    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode >= this.capacity){
      return ("Index out of bounds. Please try again.")
    }
    const bucket = this.buckets[hashCode];

    for (let i = 0; i < bucket.length; i++) {
      const kvPair = bucket[i];
      if (kvPair[0] === key){
        return kvPair[1];
      }
    }
    return null;
  }

  has(key){
    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode >= this.capacity){
      return ("Index out of bounds. Please try again.")
    }
    const bucket = this.buckets[hashCode];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key){
        return true;
      }
    }
    return false;
  }

  remove(key){
    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode > this.capacity){
      return ("Index out of bounds. Please try again.")
    }
    const bucket = this.buckets[hashCode];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] =null;
        bucket[i][0] = null;
        return true;
      }
    }
    return "Key was not there in the first place."
  }

  length() {
    let count = 0
    for (let bucket of this.buckets) {
      for (let pair of bucket) {
        if (pair[0] !== null) {
          count++;
        }
      }
    }
      return count;
    }


  clear(){
    this.buckets = new Array(this.capacity)
        .fill(null)
        .map(() => [])
  }

  keys(){
    let keyArray =[];
    for (let bucket of this.buckets){
      for (let i = 0; i < bucket.length; i++) {
        let key = bucket[i][0];
        if (key !== null) {
          keyArray.push(key);
        }
      }
    }
    return keyArray;
  }

  values(){
    let valueArray =[];
    for (let bucket of this.buckets){
      for (let i = 0; i < bucket.length; i++) {
        let key = bucket[i][0];
        if (key !== null) {
          valueArray.push(bucket[i][1]);
        }
      }
    }
    return valueArray;
  }

  entries(){
    let entryArray =[];
    for (let bucket of this.buckets) {
      for (let i = 0; i < bucket.length; i++) {
        let kvPair = bucket[i];
        if (kvPair[0] !== null) {
          entryArray.push(kvPair);
        }
      }
    }
    return entryArray;
  }


}

module.exports = {HashMap};
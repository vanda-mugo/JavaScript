// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  //console.log(`mock up strand ${newStrand}`);
  return newStrand
};


const pAequorFactory = (num, dnaArr) => {
  return {spicemenNum: num,
          dna: dnaArr,
          mutate(){
            // random number in range of length of dna strand 
            let randNum = Math.floor(Math.random() * this.dna.length);
            let newBase = returnRandBase();
            // to ensure the values are not the same we use a while loop
            while(newBase === this.dna[randNum]){
              newBase = returnRandBase();
            }
            //console.log(`changed base at index ${randNum} from ${this.dna[randNum]} to ${newBase}`);
            this.dna[randNum] = newBase;
            return this.dna;
          },
          compareDNA(pAequor){
            try{
              if(pAequor.length !== this.dna.length || !Array.isArray(pAequor)){
                // when you use new you create an instance of an Error that includes a 
                // message and a stack trace 
                throw new Error('lengthOfDnaError: the length of passed Dna differ, Attribute return value highly affected');
              }
              let count = 0;
              for(let i = 0; i < this.dna.length; i++){
                if(pAequor[i] === this.dna[i]){
                  count += 1;
                }
              }
              return (count/this.dna.length) * 100;
            }catch(error){
              console.log("An Error occured: ");
              console.log(error.message);
              return;
            }
          },
          willLikelySurvive(){
            let count = 0;
            for(let i = 0; i < this.dna.length; i++){
              if ((this.dna[i] === 'C')||(this.dna[i] === 'G')){
                // this shows the likelyhood to survive 
                count += 1; 
              }
            }
            if(((count/this.dna.length) * 100) >= 60){
              return true;
            }
            return false;
          },
          complementStrand(){
            let complementDna = new Array();
            for(let i = 0; i < this.dna.length; i++){
              if(this.dna[i] === 'A' || this.dna[i] === 'T'){
                if(this.dna[i] === 'A'){
                  complementDna[i] = 'T';
                  continue;
                }
                // since now we only remain if its T
                complementDna[i] = 'A';
              }
              if(this.dna[i] === 'C' || this.dna[i] === 'G'){
                if(this.dna[i] === 'C'){
                  complementDna[i] = 'G';
                  continue;
                }
                // since now we only remain if its T
                complementDna[i] = 'C';
              }
            }
            return complementDna;
          }};
};

// to create 30 instances of pAequor, array to be studied la
let pAequorArray = new Array();
count = 0;
while (pAequorArray.length < 30){
  // we call pAequorFactory to get a return 
  let pAequorInstance = pAequorFactory(count, mockUpStrand())//
  // the pAequorInstance has the return object, we can use this to check ability to survive . only update count within the block
  if(pAequorInstance.willLikelySurvive() === true){
    pAequorArray.push(pAequorInstance);
    count += 1; 
  }
}

// uncomment this to text the above script
/*
let obj = pAequorFactory(1, mockUpStrand());
console.log(obj);

console.log("mutate value :");
console.log(obj.mutate());
console.log("to check the possibility of survival :");
console.log(obj.willLikelySurvive());
console.log("compare with random DNA strand :");
// lets check the value of .compareDNA
console.log(obj.compareDNA(mockUpStrand()));

console.log("value of obj before complementStrand is called :");
console.log(obj);

console.log("value of complement :");
console.log(obj.complementStrand());


*/











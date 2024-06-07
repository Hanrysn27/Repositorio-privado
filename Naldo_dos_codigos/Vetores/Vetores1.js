let vetor = ['a', 'b', 'c', 'd']
let novovetor = []

for (let i = 0; i < vetor.length; i++)
{
    novovetor.push(vetor[i])
    if (vetor[i] === 'b') 
    {
        novovetor.push('ola')
    }
}

console.log(novovetor)
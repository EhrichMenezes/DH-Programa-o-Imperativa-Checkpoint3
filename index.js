function Alunos(nome, quantidadeFaltas, notas) {
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
    
    this.calcularMedia = function(){
      let media = 0;
      for (let i in this.notas){
        media += this.notas[i];
      }
      return media / notas.length;
    }
    this.faltas = function (){
      this.quantidadeFaltas ++
    }
}

const aluno1 = new Alunos("Bruno", 3, [10, 5, 8]);
const aluno2 = new Alunos("Chaves", 10, [2, 10, 9]);

module.exports = {Alunos, aluno1, aluno2};

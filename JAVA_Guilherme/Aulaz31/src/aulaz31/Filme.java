/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aulaz31;

/**
 *
 * @author dev_noite
 */
public class  Filme extends VideoFlix{
    
    protected int duracao;
    
    public Filme(){
        super();
        
    }
    
   public Filme(String titulo, String genero,int avaliacao, int duracao){
       super(titulo, genero, avaliacao);
       this.duracao = duracao;
       
   }
   
   @Override
   public void exibirInfo(){
    System.out.println("------------Informações do Filme---------------"); 
        super.exibirInfo();
        System.out.println("Duração: " + duracao);
        
       System.out.println("-------------------------------------------------");
       
   }

    public int getDuracao() {
        return duracao;
    }

    public void setDuracao(int duracao) {
        this.duracao = duracao;
    }
   
}

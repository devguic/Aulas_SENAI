/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package atividade1;

/**
 *
 * @author dev_noite
 */
public class Normal extends Ingresso {
  
    private String nome;
    
   public Normal (){
    
    
}
   public Normal (int valor, String nome){
       super(valor);
       this.nome = nome;
    
    
}
   
    @Override
   public void imprimeValor(){
        System.out.println("---------------Ingresso normal-------------");
        super.imprimeValor();
        System.out.println("Nome: " + nome);
        System.out.println("-------------------------------------------");
       
   }
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
    
}

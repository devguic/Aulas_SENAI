/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package atividade3;

/**
 *
 * @author dev_noite
 */
public class Mamifero extends Animal {
 
    protected String alimento;

    public Mamifero (){
        
    }
    
    public Mamifero(String nome, double comprimento, int patas, String cor, String ambiente, double velocidade, String alimento){
       super(nome, comprimento, patas, cor, ambiente, velocidade);
       this.alimento = alimento;
       
    }
    
    @Override
    public void dados(){
        System.out.println("------------ Mamífero -------------");
        super.dados();
        System.out.println("Alimento: " + alimento);
        System.out.println("-----------------------------------");
    }
    
    
    public String getAlimento() {
        return alimento;
    }

    public void setAlimento(String alimento) {
        this.alimento = alimento;
    }
    
}

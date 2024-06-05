/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package atividade3;

/**
 *
 * @author dev_noite
 */
public class Peixe extends Animal {
    
    protected String caracteristica;
    
    public Peixe (){
        
    }

    public Peixe(String nome, double comprimento, int patas, String cor, String ambiente, double velocidade, String caracteristica){
        
    super(nome, comprimento, patas, cor, ambiente, velocidade);
    this.caracteristica = caracteristica;
        
    }
    
    @Override
    public void dados(){
        System.out.println("------------------- Peixe ----------------"); 
      super.dados();
        System.out.println("Espécie: " + caracteristica);
        System.out.println("------------------------------------------");
        
    }
    public String getCaracteristica() {
        return caracteristica;
    }

    public void setCaracteristica(String espécie) {
        this.caracteristica = caracteristica;
    }
}

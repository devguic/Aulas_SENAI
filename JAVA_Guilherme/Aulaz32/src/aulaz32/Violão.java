/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aulaz32;

/**
 *
 * @author dev_noite
 */
public class Violão extends Instrumento{
    
    private int cordas;
    
     public Violão (){
        
        
    }
    public Violão (String marca, int ano, int cordas){
        super(marca, ano);
        this.cordas = cordas;
        
    }
    @Override
    public void exibirInfo(){
        System.out.println("------------ Violão -----------");
        super.exibirInfo();
        System.out.println("Cordas: ");
        
        
    }

    public int getCordas() {
        return cordas;
    }

    public void setCordas(int cordas) {
        this.cordas = cordas;
    }
    
    
    
}

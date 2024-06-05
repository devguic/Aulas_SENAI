/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aulaz32;

/**
 *
 * @author dev_noite
 */
public class Instrumento {
   
    private String marca;
    private int ano;
    
    
    public Instrumento (){
        
        
    }
    public Instrumento (String marca, int ano){
        
     this.marca = marca;
     this.ano = ano;
        
        
    }
    
    public void exibirInfo(){
        
        System.out.println("Marca: " + marca); 
        System.out.println("Ano: " + ano); 
        
      
    }

    
    
    
    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }
    
    
    
    
}

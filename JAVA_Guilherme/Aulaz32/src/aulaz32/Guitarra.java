/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aulaz32;

/**
 *
 * @author dev_noite
 */
public class Guitarra extends Instrumento{
    
    protected String tipo;
    
   public Guitarra (){
        
        
    }
    public Guitarra (String marca, int ano, String tipo){
       super(marca, ano);
       this.tipo = tipo;
        
        
    }  
    @Override
    public void exibirInfo(){
        System.out.println("------------ Guitarra ------------");
        super.exibirInfo();
        System.out.println("Tipo: ");
        
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
    
    
}

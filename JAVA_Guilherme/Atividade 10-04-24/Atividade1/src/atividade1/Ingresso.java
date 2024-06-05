/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package atividade1;

/**
 *
 * @author dev_noite
 */
public class Ingresso {
   
    protected double valor = 100.00;
    
    
    public Ingresso(){
        
    }
    
    public Ingresso(double valor){
        
       this.valor = valor; 
        
    }
    
    public void imprimeValor(){
       
        System.out.println("Valor: R$" + valor);
        
    }
    
    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }
    
    
    
}

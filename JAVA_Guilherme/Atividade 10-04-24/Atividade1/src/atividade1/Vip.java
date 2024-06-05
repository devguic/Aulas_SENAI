/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package atividade1;

/**
 *
 * @author dev_noite
 */
public class Vip extends Ingresso {
 
    protected double valorVip;
    
    
    
    public Vip(){
    

}
    
    
 
public double valorAdicional(){
        
       return valorVip = super.valor + 50;
        
    }
  @Override
  public void imprimeValor(){
      System.out.println("-------------Ingresso VIP------------");
      System.out.println("Valor: " + valorAdicional());
 
      
  }}


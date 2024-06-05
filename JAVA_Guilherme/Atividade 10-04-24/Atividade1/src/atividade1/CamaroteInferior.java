/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package atividade1;

/**
 *
 * @author dev_noite
 */
public class CamaroteInferior extends Vip {
   
    protected int cadeira;
    protected double valorCi;
    
    
   public CamaroteInferior(){
       
      
       
       
   } 
   public CamaroteInferior(int cadeira){
       super();
       this.cadeira = cadeira;
       
     
   } 
   public double valorCamaroteInferior(){
        
       return valorCi = super.valorAdicional() + 60;
        
    }
 
   @Override
   public void imprimeValor(){
       System.out.println("---------------Camarote Inferior------------");  
       System.out.println("Valor: " + valorCamaroteInferior());
       System.out.println("Cadeira: " + getCadeira());
       System.out.println("--------------------------------------------");
   }

    public int getCadeira() {
        return cadeira;
    }

    public void setCadeira(int cadeira) {
        this.cadeira = cadeira;
    }
    
}

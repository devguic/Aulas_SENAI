/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package atividade1;

/**
 *
 * @author dev_noite
 */
public class CamaroteSuperior extends Vip {
   
    protected int cadeira;
    protected double valorCs;
    
    
   public CamaroteSuperior(){
       
      
       
       
   } 
   public CamaroteSuperior(int cadeira){
       super();
       this.cadeira = cadeira;
       
     
   } 
   public double valorCamaroteSuperior(){
        
       return valorCs = super.valorAdicional() + 100;
        
    }
 
   @Override
   public void imprimeValor(){
       System.out.println("---------------Camarote Superior------------");  
       System.out.println("Valor: " + valorCamaroteSuperior());
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

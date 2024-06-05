/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package atividade02;

/**
 *
 * @author dev_noite
 */
public class ContaCorrente {
    
    private double saldo;
    private String cliente;
    
    

public ContaCorrente (String cliente, double saldo){
    
    this.cliente = cliente;
    this.saldo = saldo;
    
    
    
}
    
    
    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
       
        this.saldo = saldo;
        if (saldo < 0) {
            
            saldo = 0;   
        }
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }
   public void exibirConta (){
    
       System.out.println("Nome: " + cliente);
       System.out.println("Saldo: " + saldo);
       
   }
    
    
}

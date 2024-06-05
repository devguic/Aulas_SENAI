/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aulaz30;

/**
 *
 * @author dev_noite
 */
public class Cliente {
    
    

    private int id;
    private String nome;
    private String email;
    private String cpf;
    private double saldo;
    private String contato;
    
    
    public Cliente() {
        
    }
    
    public Cliente(int id, String nome, String email, String contato, String cpf, double saldo) {
     
        this.nome = nome;
        this.email = email;
        this.contato = contato;
        this.cpf = cpf;
        this.saldo = saldo;
        this.id = id;
        
    }
    
    
    
    
    public void exibirCliente(){
        
        System.out.println("--------------Informações do cliente" + id + " --------------------");
        System.out.println("Nome: " + nome);
        System.out.println("Email: " + email);
        System.out.println("Contato: " + contato);
        System.out.println("CPF: " + cpf);
        System.out.println("Saldo: " + saldo);
        
        
    }
    
 
    
  public void setNome (String nome){
    
     this.nome = nome;
      
  }  
   public String getNome (){
       
       return nome;
       
   } 

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public double getSaldo(int par) {
        return getSaldo();
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public double getSaldo() {
        return saldo;
    }

    public String getContato() {
        return contato;
    }

    public void setContato(String contato) {
        this.contato = contato;
    }

  
}

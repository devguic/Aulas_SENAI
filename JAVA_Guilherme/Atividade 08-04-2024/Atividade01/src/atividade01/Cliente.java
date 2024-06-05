/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package atividade01;

/**
 *
 * @author dev_noite
 */
public class Cliente {
    
 private String nome;
 private String endereco;
 private double renda; 
 
 
 
 public Cliente (String nome, String endereco, float renda){
     
     this.nome = nome;
     this.endereco = endereco;
     this.renda = renda;
     
     
     
 }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public double getRenda() {
        return renda;
    }

    public void setRenda(float renda) {
        this.renda = renda;
    }
    public void exibircliente(){
        
        System.out.println("Nome: " + nome);
        System.out.println("Endereço: " + endereco);
        System.out.println("Renda: " + renda);

    }
    
    
    
    
    
    
    
    
    
    
    
    
}

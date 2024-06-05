/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package model;

/**
 *
 * @author dev_noite
 */
public class Cliente {
    
    
    private int id;
    private String nome;
    private String email;
    private String cpf;
    private String contato;
    private String sexo;
    private String preferencia;
    private String estado;
    private String senha;
    
 
    public Cliente (){
        
    }
    public Cliente (int id, String nome,
     String email,
     String cpf,
     String contato,
   String sexo,
     String preferencia,
     String estado,
     String senha){
        
        
     this.id = id;
     this.nome = nome;
     this.email = email;
     this.cpf = cpf;
     this.contato = contato;
     this.sexo = sexo;
     this.preferencia = preferencia;
     this.estado = estado;
     this.senha = senha;
        
        
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
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

    public String getContato() {
        return contato;
    }

    public void setContato(String contato) {
        this.contato = contato;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getPreferencia() {
        return preferencia;
    }

    public void setPreferencia(String preferencia) {
        this.preferencia = preferencia;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
    
}

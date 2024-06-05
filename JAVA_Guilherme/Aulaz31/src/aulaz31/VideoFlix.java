/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aulaz31;

/**
 *
 * @author dev_noite
 */
public class VideoFlix {
    
    
 protected String titulo;
 protected String genero;
 protected int avaliacao;
 
 
 

 
 public VideoFlix (){
   
 }
 public VideoFlix (String titulo, String genero, int avaliacao){
     
     this.titulo = titulo;
     this.genero = genero;
     this.avaliacao = avaliacao;
     
 }
 public void exibirInfo(){
     
     System.out.println("Título: " + titulo);
     System.out.println("Gênero: " + genero);
     System.out.println("Avaliação: " + avaliacao);
 }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public int getAvaliacao() {
        return avaliacao;
    }

    public void setAvaliacao(int avaliacao) {
        this.avaliacao = avaliacao;
    }
 
 
    
    
}

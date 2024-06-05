/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aulaz31;

/**
 *
 * @author dev_noite
 */
public class Serie extends VideoFlix {
    
    
    protected int temporadas;
    
    public Serie (){
        super();
    }
    public Serie (String titulo, String genero, int avaliacao, int temporadas){
        super(titulo, genero, avaliacao);
        this.temporadas = temporadas;
    }
    @Override
   public void exibirInfo(){
    System.out.println("------------Informações da série---------------"); 
        super.exibirInfo();
        System.out.println("Temporadas: " + temporadas);
        
       System.out.println("-------------------------------------------------");
   }
    public int getTemporadas() {
        return temporadas;
    }

    public void setTemporadas(int temporadas) {
        this.temporadas = temporadas;
    }
    
    
}

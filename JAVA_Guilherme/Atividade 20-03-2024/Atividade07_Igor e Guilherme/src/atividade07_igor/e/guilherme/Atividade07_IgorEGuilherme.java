/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade07_igor.e.guilherme;

/**
 *
 * @author dev_noite
 */
public class Atividade07_IgorEGuilherme {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    double jorge=1.72;
    double roberto=1.65;
    int tempo=0;
    
    do {            
        
        jorge +=0.03;
        roberto +=0.04;
        
        tempo++;
        } while (jorge > roberto );
    
        System.err.println("O tempo necessário para roberto passar Jorge em altura é " + tempo +" anos");
    
    }
    
}

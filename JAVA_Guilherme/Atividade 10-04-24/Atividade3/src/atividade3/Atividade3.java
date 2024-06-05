/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade3;

/**
 *
 * @author dev_noite
 */
public class Atividade3 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
        Mamifero camelo = new Mamifero ("Camelo", 150, 4, "Amarelo", "Terra", 2.0, "plantas salgadas");
        camelo.dados();
    
         Peixe tubarao = new Peixe ("Tubarão", 300, 0, "Cinzento", "Mar", 1.5, "Barbatanas e cauda");
         tubarao.dados();
         
         Mamifero urso = new Mamifero ("Urso-do-canadá", 180, 4, "Vermelho", "Terra", 0.5, "Mel");
         urso.dados();
    }
    
}

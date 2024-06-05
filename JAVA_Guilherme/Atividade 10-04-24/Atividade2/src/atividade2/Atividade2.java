/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade2;

/**
 *
 * @author dev_noite
 */
public class Atividade2 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Gerente g1 = new Gerente("Marcos", 5000.00, "Usinagem");
    g1.exibirInfo();
    
    
    Vendedor v1 = new Vendedor("Fabio", 2000, 0.30);
    v1.exibirInfo();
    }
    
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aulaz33;

import javax.swing.JOptionPane;

/**
 *
 * @author dev_noite
 */
public class Aulaz33 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    int num1, num2, result;
    
        try {
           
               num1 = Integer.parseInt(JOptionPane.showInputDialog(null, "Digite um número", "Dados", JOptionPane.INFORMATION_MESSAGE));
               num2 = Integer.parseInt(JOptionPane.showInputDialog(null, "Digite outro número", "Dados", JOptionPane.INFORMATION_MESSAGE));
    
               result = num1+num2;
    
               JOptionPane.showMessageDialog(null, "O resultado da soma dos números é " + result, "Mensagem", JOptionPane.INFORMATION_MESSAGE);
    
            
        } catch (NumberFormatException e) {
              JOptionPane.showMessageDialog(null, "Operação cancelada ou Dados Inválidos", "ERRO", JOptionPane.ERROR_MESSAGE);
        }
    
   
    
    
    
    }
    
}

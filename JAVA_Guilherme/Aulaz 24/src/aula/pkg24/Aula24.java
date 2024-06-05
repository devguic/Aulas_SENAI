/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aula.pkg24;

import java.util.ArrayList;
import static java.util.Arrays.asList;
import java.util.List;

/**
 *
 * @author dev_noite
 */
public class Aula24 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
      
        //as list inicia o array com alguns valores
        List<Integer> numeros = new ArrayList<>(asList(11, 43, 9, 7));
        
        numeros.add(25);
        numeros.add(12);
        numeros.add(45);
        numeros.add(34);
        numeros.add(19);
        
        numeros.remove(2);// remove o valor da posiçao 2 do array
        
        System.out.println(numeros.get(2));// imprime somente o valor da posição 3
        
        for (int i = 0; i < numeros.size(); i++) {
            
            System.out.println(numeros.get(i));
            
        }
        
        
        
    }
    
}


/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aula.pkg26;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Aula26 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        
        final int MIN_NUMERO = 1;
        final int MAX_NUMERO = 10;
        final int MAX_TENTATIVAS = 3;
        
        int num_aleatorio = (int) (Math.random() * (MAX_NUMERO - MIN_NUMERO + 1) + MIN_NUMERO);
        int tentativas = 0;
        
        System.out.println("Tente adivinhar o número aleatório entre " + MIN_NUMERO + " e " + MAX_NUMERO + ":");
        
        while (tentativas < MAX_TENTATIVAS) {
            try {
                System.out.print("Digite um número: ");
                int num = ler.nextInt();
                tentativas++;
                
                if (num < MIN_NUMERO || num > MAX_NUMERO) {
                    System.out.println("Por favor, digite um número entre " + MIN_NUMERO + " e " + MAX_NUMERO + ".");
                    continue;
                }
                
                if (num != num_aleatorio) {
                    System.out.println("Você errou! Tente novamente."); 
                    if (num < num_aleatorio)
                        System.out.println("Dica: Tente um número maior.");
                    else
                        System.out.println("Dica: Tente um número menor.");
                } else {
                    System.out.println("Parabéns, você acertou!");
                    break;
                }
            } catch (java.util.InputMismatchException e) {
                System.out.println("Por favor, digite um número válido.");
                ler.nextLine(); // Limpar o buffer do scanner
            }
        }
        
        if (tentativas == MAX_TENTATIVAS)
            System.out.println("Você atingiu o limite de tentativas. O número era: " + num_aleatorio);
        
        ler.close();
    }
}
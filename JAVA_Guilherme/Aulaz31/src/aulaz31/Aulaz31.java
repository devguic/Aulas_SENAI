/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aulaz31;

/**
 *
 * @author dev_noite
 */
public class Aulaz31 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Filme f1 = new Filme();
    Serie s1 = new Serie();
    
    f1.setTitulo("Senhor dos aneis");
    f1.setGenero("Aventura");
    f1.setAvaliacao(7);
    f1.setDuracao(210);
    f1.exibirInfo();
    
    
    s1.setTitulo("Game of Thrones");
    s1.setGenero("Fantasia");
    s1.setAvaliacao(8);
    s1.setTemporadas(8);
    s1.exibirInfo();
    
  Filme f2 = new Filme("Tropa de elite 1", "Ação", 7, 160);
  f2.exibirInfo();
   
  Serie s2 = new Serie("Stranger Things", "Ficção Científica", 8, 4);
   s2.exibirInfo();
   
    }
    
}

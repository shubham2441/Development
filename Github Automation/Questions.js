module.exports = [
    {
        "FileName": "diagonalTraversal.java",
        "Code":`import java.io.*;
                import java.util.*;

                public class Main {
                public static void main(String[] args) throws Exception {
            
                    Scanner scn = new Scanner(System.in);
                    int n = scn.nextInt();
                    int[][] arr = new int[n][n];
                    for(int i = 0; i <n; i++) {
                        for(int j = 0; j <n; j++) {
                        arr[i][j] = scn.nextInt();
                        }
                    }
                    for (int gap = 0; gap < n; gap++) {
                        for (int row = 0, col = row + gap; row < n && col < n; row++, col++) {
                            System.out.println(arr[row][col]);
                            }
                        }
                    }
                }`
    },
    {
        "FileName" : "SaddlePoint.java",
        "Code" : `import java.io.*;
                import java.util.*;
                
                public class Main{
                public static void main(String[] args) throws Exception {
                    
                    Scanner scn = new Scanner(System.in);
                    int n = scn.nextInt();
                    int[] arr = new int[n];
                    for(int i=0;i<n;i++){
                        arr[i] = scn.nextInt();
                    }
                    
                    for(int i=0;i<n;i++){
                        int count = i+1;
                        while(count<=n){
                        for(int j=i;j<count;j++){
                            System.out.print(arr[j]+"\t");
                            }
                        count++;
                        System.out.println();
                        }
                    }
                }
            }`
    }
]
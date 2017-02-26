---
layout: post
title: Codingame - Easy - Power of Thor - Episode 1!
---
![Power of Thor - Episode 1](https://meetsandesh.github.io/blogs/images/Power-of-Thor-Episode-1.png "Power of Thor - Episode 1")

Hello, there!

Following is the code in Java the easy problem - **_Power of Thor - Episode 1_**.

```java
import java.util.*;
import java.io.*;
import java.math.*;
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
class Player {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int LX = in.nextInt(); // the X position of the light of power
        int LY = in.nextInt(); // the Y position of the light of power
        int TX = in.nextInt(); // Thor's starting X position
        int TY = in.nextInt(); // Thor's starting Y position
        int dX,dY;
        // game loop
        while (true) {
            int E = in.nextInt(); // The level of Thor's remaining energy, representing the number of moves he can still make.
            dX=LX-TX;
            dY=LY-TY;
            // Write an action using System.out.println()
            // To debug: System.err.println("Debug messages...");
            if(dX!=0)
                dX=dX/Math.abs(dX);
            if(dY!=0)
                dY=dY/Math.abs(dY);
            TX=TX+dX;
            TY=TY+dY;
            // A single line providing the move to be made: N NE E SE S SW W or NW
            if(dX==1 && dY==0)
                System.out.println("E");
            else if(dX==-1 && dY==0)
                System.out.println("W");
            else if(dX==0 && dY==-1)
                System.out.println("N");
            else if(dX==0 && dY==1)
                System.out.println("S");
            else if(dX==1 && dY==-1)
                System.out.println("NE");
            else if(dX==-1 && dY==-1)
                System.out.println("NW");
            else if(dX==-1 && dY==1)
                System.out.println("SW");
            else if(dX==1 && dY==1)
                System.out.println("SE"); 
        }
    }
}
```

Stay tuned for more!!!

Bye!!!

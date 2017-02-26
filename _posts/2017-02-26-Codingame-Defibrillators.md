---
layout: post
title: Codingame - Easy - Defibrillators!
---

Hello, there!

Following is the code in Java the easy problem - **_Defibrillators_**.

```java
import java.util.*;
import java.io.*;
import java.math.*;
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
class Solution {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        String LON = in.next();
        String LAT = in.next();
        int N = in.nextInt();
        in.nextLine();
        List<String> defibrilateurs = new ArrayList<String>();
        for (int i = 0; i < N; i++) {
            String DEFIB = in.nextLine();
            defibrilateurs.add(DEFIB);
        }
        String answer = "unknow";
        double distance = Double.MAX_VALUE;
        double longitudeUser = Math.toRadians(Double.parseDouble(LON.replace(",", ".")));
        double latitudeUser = Math.toRadians(Double.parseDouble(LAT.replace(",", ".")));
        for (String defib : defibrilateurs) {
            double longitudeDefib = Math.toRadians(Double.parseDouble(defib.split(";")[4].replace(",", ".")));
            double latitudeDefib = Math.toRadians(Double.parseDouble(defib.split(";")[5].replace(",", ".")));
            double x = (longitudeDefib - longitudeUser)*Math.cos((latitudeUser+latitudeDefib)/2);
            double y = (latitudeDefib - latitudeUser);
            double d = (Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)))*6371;
            if (d < distance) {
                distance = d;
                answer = defib.split(";")[1];
            } 
        } 
        System.out.println(answer);
    }
}
```

Stay tuned for more!!!

Bye!!!

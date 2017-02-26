---
layout: post
title: Codingame - Easy - Horse Racing Duals!
---

Hello, there!

Following is the code in Java the easy problem - **_Horse Racing Duals_**.

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
        int N = in.nextInt();
        int[] arr=new int[N];
        for (int i = 0; i < N; i++) {
            arr[i]= in.nextInt();
        }
        Arrays.sort(arr);
        int diff=Integer.MAX_VALUE;
        for (int i=0; i<N-1; i++)
          if (arr[i+1] - arr[i] < diff)
              diff = arr[i+1] - arr[i];
        System.out.println(diff);
    }
}
```

Stay tuned for more!!!

Bye!!!

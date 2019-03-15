#include <iostream>
#include<cmath>
using namespace std;

int main()
{    
    int A[8]={0,3,8,7,5,6,11,3};
    
    int N = (sizeof(A)/sizeof(*A));
    cout << N;
    int min=100000000;
  
    int diff;
    
    
    for (int i=0; i<N; i++){
        for(int j=i+1;j<N;j++)
 {           
                diff = abs(A[i] - A[j]);
                
                if (min>=diff){
                    min=diff;
                    // cout <<dist<<endl;
                }
    
 }               
    }
    
    
    cout<< min;
    return diff;
}

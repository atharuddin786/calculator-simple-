function dis(val)
         {
             document.querySelector(".resultDisplay").value+=val
         }

         //function that evaluates the digit and return result
         function solve()
         {
             let x = document.querySelector(".resultDisplay").value
             let y = eval(x)
             document.querySelector(".resultDisplay").value = y
         }

         //function that clear the display
         function clr()
         {
             document.querySelector(".resultDisplay").value = ""
         }

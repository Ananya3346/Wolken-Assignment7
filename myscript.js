
			function isPrime()
			{
				var i,flag=0,number;
				number = Number(document.getElementById("N").value);

				for(i=2; i<= number/2; i++)
				{
					if(number%i == 0)
					{
						flag = 1;
						break;
					}
				}
				if(flag == 0)
				{
					window.alert("This is a prime number");
				}
				else
				{
					window.alert("This is not a Prime number");
				}
			}

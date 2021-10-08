function Palindrome()
	{
		var rem, temp, final = 0;
		var number = Number(document.getElementById("N").value);

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			window.alert("The input number is Palindrome");
		}
		else
		{
			window.alert("The input number is not palindrome");
		}
	}
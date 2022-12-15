let pallindrom = (a:String) =>
{
    const len = a.length;
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (a[i] !== a[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
pallindrom("aba");
pallindrom("abc");
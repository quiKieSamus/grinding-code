bitPosition = (bit) => 
{
    bit = bit + 1;
    let result = 0;
    for (let i = 0; i <= bit; i++)
    {
        if (i === 1) 
        {
            result = i;
        }
        else
        {
            result += result;
        }
        
    }
    return result;
}

console.log(bitPosition(0));
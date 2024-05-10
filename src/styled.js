import styled from 'styled-components'

export const DivComp1 = styled.div`
    border: 3px solid blue;
    padding: 20px;
`

export const DivSigning = styled.div`

font-family: Arial, Helvetica, sans-serif;

form{
    width: 400px; margin: 0 auto;
    background-color: blueviolet; color: white;

    fieldset{
        padding:20px;

        legend{ 
            font-size:20px; text-align: center; padding: 10px;
        }

        label{
            display: flex; flex-direction: column; margin-bottom: 10px;
        }

        input{
            padding: 5px; border-radius: 5px; border: none; outline-color: darkgray;
        }

        button{
            padding: 5px 20px; border-radius: 5px; border: none; background-color: #3f3
        }
    }
}

.card{
    width: 90%; display: flex; margin: auto; flex-wrap: wrap;
    justify-content: space-evenly;
}

.memoryCard{
    padding: 10px; border: 5px solid #509; width: 400px; margin: 10px;
    background-color: #a5f; border-radius: 5px;
}

`
import $ from "jquery";

export default class TempConv
{
    constructor(rootElement)
    {
        this.rootElement = rootElement;
        this.celsius = 0;
        this.fahrenheit = 0;
    }
  
    render()
    {
        //Detach event listeners
        $("button").off("click");
        
        //Define html
        let html = `
            <table>
                <tr>
                    <td>Celsius</td>
                    <td>&nbsp;</td>
                    <td>Fahrenheit</td>
                </tr>

                <tr>
                    <td><input id="txtCelsius" value="${this.celsius}"/></td>
                    <td>
                        <button id="btnCelsToFahr">>>></button><br/>
                        <button id="btnFahrToCels"><<<</button>
                    </td>
                    <td><input id="txtFahrenheit" value="${this.fahrenheit}"/></td>
                </tr>
            </table>
        `;

        rootElement.innerHTML = html;
        
        //Attach event listeners
        $("#btnCelsToFahr").on("click", () => { 
            this.convertCelsToFahr();
        });

        $("#btnFahrToCels").on("click", () => { 
            this.convertFahrToCels();
        });
    }
    
    convertCelsToFahr()
    {
        this.celsius = $("#txtCelsius").val();
        this.fahrenheit = this.celsius * 9 / 5 + 32; //F = C * 9 / 5 + 32
        this.render();
    }
  
    convertFahrToCels()
    {
        this.fahrenheit = $("#txtFahrenheit").val();
        this.celsius = (this.fahrenheit - 32) / 9 * 5; //C = (F - 32) / 9 * 5
        this.render();
    }  
};

// Projeto Ultrassônico

// Declarando variaveis 

byte led[] = {1, 2, 3, 4, 5, 6};
int trigger = 8;
int echo = 9;
float distancia = 0;

// Inicialização das variaveis

void setup()
{
    for(int i = 0; i <= 5; i++)
    {
        pinMode(led[i], OUTPUT);
    }
    pinMode(trigger, OUTPUT);
    pinMode(echo, INPUT);
}

// monitor serial
serial.begin(9600);

// executação das instrucões
void loop()
{
sensor()
}
void sensor()
{
distancia = pulseIn(echo, 1);
//  Imprime no monitor serial
Serial.print('A distancia e: ');
Serial.print(distancia);
Serial.print('Cm');
}

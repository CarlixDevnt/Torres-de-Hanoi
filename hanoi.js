function hanoi(discos, origen, destino, auxiliar)
{
    if(discos == 1) {
        // Mover 1 disco desde la vara 1 hasta la 3
        console.log("Mueve el disco ", discos, " desde la vara ", origen, " hasta la vara ", destino);
    } else {
        // Mover n-1 discos desde la vara origen a la auxiliar
        hanoi(discos-1, origen, auxiliar, destino);
        console.log("Mueve el disco ", discos, " desde la vara ", origen, " hasta la vara ", destino);
        // Mover esos discos de la vara auxiliar a la vara destino
        hanoi(discos-1, auxiliar, destino, origen);
    }
}

hanoi(3, 1, 3, 2);
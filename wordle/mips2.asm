.data
vect:	.word 8,-3,4,2,5,-7,6,1
tam: 	.word 8
res:  	.word 0
.text
main:	la $a0,vect
	lw $a1,tam($0)
	jal abssum
	sw $v0,res($0)
	li $2,10
	syscall
abssum:
	li $v0,0	#salida
loop:	beq $s5,$a1,endloop
	lw $s1,0($a0)
	abs $s1,$s1
	add $v0,$v0,$s1
	addi $a0,$a0,4	#incremento en 32bits
	addi $s5,$s5,1	#incrementa el contador para comparar
	j loop
endloop:
	jr $ra	

	
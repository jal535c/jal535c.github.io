.data
datos1: .word 8,3,4,2,5,7,6,1
datos2: .word 4,3,5,6,5,4,6,0
Num: 	.word 8
res:  	.word 0
.text
	lw $s3,Num
	li $s0,0
	lw $s2,res
	li $s5,0	#contador de ciclos
while:	
	beq $s5, $s3, endwhile
	lw $s1,datos1($s0)
	#add $s2,$s2,$s1
	lw $s6,datos2($s0)
	bne $s1,$s6,endif
	addi $s2,$s2,1
endif:	
	addi $s0,$s0,4	#incremento en 32bits
	addi $s5,$s5,1
	j while
endwhile:
	sw $s2,res
	li $v0,17
	li $a0,0
	syscall
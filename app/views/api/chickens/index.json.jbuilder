@chickens.each do |chicken|
	json.set! chicken.id do 
		json.partial! 'chicken', chicken: chicken
	end
end
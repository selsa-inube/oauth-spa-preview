package data

type Employee struct {
	Key      int    `json:"key"`
	Name     string `json:"name"`
	Age      int    `json:"age"`
	Position int    `json:"position"`
}

type Site struct {
	Key     int    `json:"key"`
	Address string `json:"address"`
	City    string `json:"city"`
}

var Employees = []Employee{
	{Key: 1, Name: "Juan Lopez", Age: 21},
	{Key: 2, Name: "Diego Alvarez", Age: 19},
	{Key: 3, Name: "Han Solo", Age: 29},
}

var Sites = []Site{
	{Key: 1, Address: "Calle 32 #16-32", City: "Bogota"},
	{Key: 2, Address: "Calle 75 #78 - 32", City: "Bogota"},
	{Key: 3, Address: "Calle 12 #45 - 06", City: "Medellin"},
}

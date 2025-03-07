function PokeBowl (size,base,ingredeints){
    this.size = size
    this.base = base
    this.ingredeints = []
    this.price = 5

    this.ingredeints.push(...ingredeints.ingredeints)
}

export default PokeBowl
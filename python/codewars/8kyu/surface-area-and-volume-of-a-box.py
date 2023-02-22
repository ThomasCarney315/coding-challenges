# Write a function that returns the total surface area and volume of a box as an array: [area, volume]

def get_size(w,h,d):
    area =  2 * (d * h + w * h + d * w )
    volume = w * h * d
    return[area, volume]
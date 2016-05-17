class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, :seating, presence: true

  def self.in_bounds(bounds)
    lat_max = bounds["northEast"]["lat"].to_f
    lat_min = bounds["southWest"]["lat"].to_f

    lng_max = bounds["northEast"]["lng"].to_f
    lng_min = bounds["southWest"]["lng"].to_f

    self.where(
      lat: (lat_min)..(lat_max),
      lng: (lng_min)..(lng_max)
    )
  end
end

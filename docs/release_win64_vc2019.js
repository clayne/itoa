var tests=[{ name: 'u32toa', info: 'release win64 vc2019', categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'URND LEN'], data: [
{ name: 'amartin', data:[43.000000,43.000000,61.250000,61.250000,87.500000,87.500000,97.250000,97.750000,83.000000,83.500000,85.750000,]},
{ name: 'branchlut', data:[7.000000,6.750000,7.000000,7.500000,12.750000,12.750000,13.500000,13.500000,16.500000,17.250000,31.250000,]},
{ name: 'branchlut2', data:[4.500000,6.000000,6.750000,7.500000,11.000000,11.500000,14.000000,14.500000,16.750000,17.250000,33.000000,]},
{ name: 'count', data:[7.250000,10.000000,13.250000,17.250000,20.500000,24.250000,28.000000,31.750000,35.500000,39.750000,44.000000,]},
{ name: 'countlut', data:[5.250000,6.500000,8.000000,8.750000,11.250000,12.000000,15.000000,15.750000,18.500000,19.250000,34.250000,]},
{ name: 'fmt', data:[4.750000,6.000000,7.250000,7.500000,9.750000,9.750000,12.750000,12.500000,15.750000,15.500000,33.500000,]},
{ name: 'int_to_chars_jeaiii<void>', data:[4.000000,4.500000,6.250000,6.250000,6.750000,7.250000,8.250000,8.500000,9.500000,10.000000,27.000000,]},
{ name: 'jeaiii::to_text', data:[4.000000,4.000000,5.750000,5.750000,7.000000,7.000000,8.000000,8.000000,9.500000,9.500000,20.500000,]},
{ name: 'lut', data:[9.750000,10.000000,13.500000,15.250000,18.750000,20.500000,24.500000,26.250000,30.750000,32.000000,46.000000,]},
{ name: 'mwilson', data:[9.500000,12.000000,17.000000,19.000000,25.000000,26.500000,30.750000,35.000000,39.250000,45.250000,53.500000,]},
{ name: 'naive', data:[9.250000,13.250000,17.250000,21.000000,25.000000,29.250000,33.500000,38.000000,42.750000,47.750000,52.000000,]},
{ name: 'null', data:[3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,]},
{ name: 'sprintf', data:[117.000000,118.500000,124.500000,129.250000,135.000000,140.000000,144.750000,149.000000,154.750000,161.750000,160.500000,]},
{ name: 'sse2', data:[6.750000,6.750000,7.000000,7.500000,12.000000,12.250000,13.000000,13.000000,14.250000,15.000000,31.500000,]},
{ name: 'unnamed', data:[12.500000,13.750000,14.250000,17.000000,19.750000,23.000000,26.000000,29.000000,32.500000,36.750000,39.500000,]},
{ name: 'unrolledlut', data:[6.500000,6.000000,9.000000,7.750000,10.250000,9.750000,9.250000,9.750000,11.000000,11.000000,27.000000,]},
{ name: 'vc', data:[32.000000,49.000000,66.750000,89.250000,113.250000,140.250000,166.250000,195.000000,220.750000,250.250000,174.500000,]},
]},
{ name: 'u64toa', info: 'release win64 vc2019', categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 'URND LEN'], data: [
{ name: 'amartin', data:[43.750000,43.750000,62.000000,62.000000,88.750000,88.750000,98.500000,98.750000,83.500000,83.250000,171.500000,171.500000,201.500000,201.250000,209.250000,209.500000,192.250000,192.000000,204.500000,204.500000,155.000000,]},
{ name: 'branchlut', data:[7.250000,6.750000,7.250000,7.500000,11.750000,11.750000,12.250000,12.500000,24.500000,24.500000,25.250000,26.500000,28.000000,28.250000,29.500000,29.500000,50.500000,50.750000,52.000000,53.250000,54.500000,]},
{ name: 'branchlut2', data:[4.750000,5.500000,7.250000,7.500000,9.750000,10.500000,13.000000,13.750000,17.750000,18.000000,20.250000,20.750000,23.250000,24.250000,26.750000,27.750000,53.250000,53.000000,55.250000,55.500000,57.250000,]},
{ name: 'count', data:[7.250000,9.750000,12.500000,15.500000,18.750000,22.250000,25.750000,28.500000,32.000000,35.500000,39.250000,43.000000,47.000000,51.250000,56.250000,60.250000,64.000000,67.750000,71.750000,76.000000,68.500000,]},
{ name: 'countlut', data:[7.000000,8.000000,10.500000,10.750000,13.250000,13.750000,16.750000,17.250000,18.750000,19.500000,22.250000,24.500000,28.500000,32.000000,31.750000,32.250000,34.000000,35.000000,36.500000,37.250000,49.250000,]},
{ name: 'fmt', data:[6.750000,5.750000,8.750000,9.000000,12.000000,11.750000,16.250000,16.000000,21.500000,20.500000,26.250000,25.750000,31.750000,31.250000,37.750000,37.000000,43.500000,42.500000,49.250000,48.250000,58.000000,]},
{ name: 'int_to_chars_jeaiii<void>', data:[4.750000,4.750000,6.750000,7.750000,7.500000,8.500000,9.000000,9.750000,10.500000,10.750000,13.500000,13.250000,14.500000,15.250000,16.250000,16.250000,17.750000,17.750000,19.000000,19.000000,43.750000,]},
{ name: 'jeaiii::to_text', data:[4.750000,4.750000,6.250000,6.500000,7.250000,7.250000,9.000000,9.000000,10.500000,10.500000,13.500000,13.500000,14.750000,14.750000,16.250000,16.250000,18.500000,18.500000,20.750000,20.750000,32.750000,]},
{ name: 'lut', data:[10.250000,10.000000,14.250000,15.750000,20.250000,22.000000,26.500000,28.250000,33.000000,35.000000,41.000000,42.750000,48.500000,51.250000,57.750000,60.250000,66.500000,68.000000,75.250000,76.750000,76.500000,]},
{ name: 'mwilson', data:[9.500000,12.500000,17.500000,18.000000,22.750000,25.000000,28.500000,33.000000,37.000000,42.250000,46.750000,52.500000,57.500000,63.500000,68.250000,74.000000,78.500000,84.000000,88.500000,93.750000,87.000000,]},
{ name: 'naive', data:[9.250000,13.000000,16.750000,20.500000,24.500000,28.000000,32.500000,36.750000,41.500000,46.250000,51.250000,56.750000,61.750000,67.250000,72.250000,77.750000,82.750000,87.500000,92.750000,98.250000,85.500000,]},
{ name: 'null', data:[3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,3.250000,]},
{ name: 'sprintf', data:[143.500000,142.750000,148.750000,155.000000,161.250000,168.250000,175.000000,181.750000,187.250000,190.750000,196.250000,202.000000,207.750000,213.000000,222.750000,229.000000,233.250000,239.250000,245.500000,251.750000,226.750000,]},
{ name: 'sse2', data:[8.250000,7.500000,8.250000,8.500000,12.500000,12.500000,13.250000,13.500000,25.000000,25.000000,25.000000,25.000000,25.000000,25.000000,25.000000,25.000000,39.500000,41.750000,45.000000,45.500000,62.000000,]},
{ name: 'unnamed', data:[13.750000,15.000000,16.500000,18.500000,21.500000,24.500000,27.250000,30.500000,33.750000,38.000000,68.750000,88.250000,106.000000,123.750000,142.500000,160.000000,179.500000,196.500000,216.000000,234.250000,113.000000,]},
{ name: 'unrolledlut', data:[8.500000,7.750000,10.750000,9.000000,11.500000,10.750000,10.500000,10.500000,12.000000,12.000000,18.000000,18.000000,20.000000,20.000000,19.750000,19.750000,23.000000,23.000000,25.500000,25.250000,43.750000,]},
{ name: 'vc', data:[31.250000,48.250000,66.250000,89.000000,113.250000,140.250000,166.500000,194.500000,220.500000,250.250000,276.000000,305.750000,331.750000,354.500000,387.500000,416.500000,442.500000,472.750000,498.750000,526.250000,312.000000,]},
]},
];
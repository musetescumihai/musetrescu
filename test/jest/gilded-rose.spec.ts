import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].name).toBe('foo');
  });

  it('sword quality drops by 1', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Sword', 1, 1)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(0);
  })

  it('Once the sell by date has passed, Quality degrades twice as fast', () => {
    const gildedRose = new GildedRose([new Item('Marian', 0, 4)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(2);
  })


  
  it('Cazul in care numele e Backstage passes to a TAFKAL80ETC concert si sellin< 11', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 4)]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(6);
  })
  it('cazul numele e random si sellin < 6 ', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 4)]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(7);
  })
  it('cazul numele e random si sellin < 6 ', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 50, 4)]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(5);
  })


  it('Cazul in care selling e negativ si nume e Aged Brie si calitate mai mica ca 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', -5, 4)]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(6);
  })

  it('Cazul in care selling e mai mare ca 0 si nume e random si calitate mai mica ca 50', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -5, 49)]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(49);
  })

  it('linia 61', () => {
    const gildedRose = new GildedRose([new Item('a', -5, 30)]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(28);
  })
  it('Cazul in care selling e negativ si nume e Aged Brie si calitate mai mica ca 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', -5, 600)]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(600);
  })
  it('Cazul in care numele e Backstage passes to a TAFKAL80ETC concert si sellin< 11', () => {
    const gildedRose = new GildedRose([new Item('Ba', 10, 4)]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(3);
  })
  
  it('Cazul in care numele e Sulfuras, Hand of Ragnaros si sellin< 11', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 4)]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(4);
  })
  it('Cazul in care selling e mai mare ca 0 si nume e random si calitate mai mica ca 50', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, -1)]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(-1);
  })
  
  it('Cazul in care selling e mai mare ca 0 si nume e random si calitate mai mica ca 50', () => {
    const gildedRose = new GildedRose([new Item('Conjured', 5, 30)]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(28);
  })
  it('Cazul in care selling e mai mare ca 0 si nume e random si calitate mai mica ca 50', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras', 5, 80)]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(79);
  })
  
})




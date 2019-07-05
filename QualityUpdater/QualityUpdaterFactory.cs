using GildedRoseRefactoringKata.QualityUpdater.Updaters;

namespace GildedRoseRefactoringKata.QualityUpdater
{
    public class QualityUpdaterFactory
    {
        public static IQualityUpdater Build(Item item)
        {
            switch (item.Name)
            {
                case "Aged Brie": return new AgedBrieQualityUpdater(item);
                case "Backstage passes to a TAFKAL80ETC concert": return new BackstagePassesQualityUpdater(item);
                case "Sulfuras, Hand of Ragnaros": return new SulfurasQualityUpdater(item);
                default: return new DefaultQualityUpdater(item);
            }
        }
    }
}
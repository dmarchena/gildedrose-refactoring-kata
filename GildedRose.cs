using System.Collections.Generic;
using GildedRoseRefactoringKata.QualityUpdater;

namespace GildedRoseRefactoringKata
{
    public class GildedRose
    {
        private readonly IList<Item> _items;

        public GildedRose(IList<Item> items)
        {
            _items = items;
        }

        public void UpdateQuality()
        {
            foreach (var item in _items)
            {
                var qualityUpdater = QualityUpdaterFactory.Build(item);
                qualityUpdater.Update();
            }
        }
    }
}